<template>
       <div ref="ganttContainer" id="gantt"></div>
</template>

<script>
import { Gantt } from '@bryntum/gantt';

export default {
       name: 'GanttChart',
       mounted() {
              if (this.$refs.ganttContainer) {
                     const gantt = new Gantt({
                            appendTo: this.$refs.ganttContainer,
                            features: {
                                   taskDrag: true,
                                   taskResize: true,
                                   dependencies: true,
                                   taskEdit: true,
                                   labels: { left: 'name', right: 'duration' },
                            },
                            columns: [
                                   { type: 'name', field: 'name', text: 'Task Name', width: 150 },
                                   { type: 'startdate', text: 'Start Date' },
                                   { type: 'enddate', text: 'End Date' },
                                   { type: 'duration', text: 'Duration' },
                            ],
                            tasks: [
                                   { id: 1, name: 'Requirement', startDate: '2024-12-01', duration: 4 },
                                   { id: 2, name: 'Planning', startDate: '2024-12-05', duration: 4 },
                                   { id: 3, name: 'Structure', startDate: '2024-12-09', duration: 5 },
                                   { id: 4, name: 'Tables', startDate: '2024-12-14', duration: 4 },
                                   { id: 5, name: 'Development', startDate: '2024-12-18', duration: 4 },
                                   { id: 6, name: 'Testing', startDate: '2024-12-22', duration: 3 },
                                   { id: 7, name: 'Staging', startDate: '2024-12-25', duration: 2 },
                                   { id: 8, name: 'Execution', startDate: '2024-12-27', duration: 2 },
                                   { id: 9, name: 'Production', startDate: '2024-12-29', duration: 2 },
                            ],

                            dependencies: [
                                   { fromEvent: 1, toEvent: 2 },
                                   { fromEvent: 2, toEvent: 3 },
                                   { fromEvent: 3, toEvent: 4 },
                                   { fromEvent: 4, toEvent: 5 },
                                   { fromEvent: 5, toEvent: 6 },
                                   { fromEvent: 6, toEvent: 7 },
                                   { fromEvent: 7, toEvent: 8 },
                                   { fromEvent: 8, toEvent: 9 },
                            ],
                            startDate: '2024-12-01',
                            endDate: '2024-12-31',
                     });
                     gantt.on('taskDrag', ({ taskRecords, newStartDate, newEndDate }) => {
                            console.log('Full event payload:', { taskRecords, newStartDate, newEndDate });

                            if (!taskRecords || taskRecords.length === 0) {
                                   console.error('taskRecords is undefined or empty!');
                                   return;
                            }

                            // Access the first task record (if only one task is dragged)
                            const taskRecord = taskRecords[0];
                            if (taskRecord) {
                                   console.log(`Task "${taskRecord.name}" dragged to: ${newStartDate} - ${newEndDate}`);
                                   console.log('Task details:', {
                                          id: taskRecord.id,
                                          name: taskRecord.name,
                                          originalStartDate: taskRecord.startDate,
                                          newStartDate,
                                          newEndDate,
                                   });
                            } else {
                                   console.error('Unable to extract task details!');
                            }
                     });

              } else {
                     console.error('Gantt container not found!');
              }
       },
};
</script>

<style>
#gantt {
       height: 700px;
       overflow-y: auto;
       /* Enables vertical scrolling if content exceeds height */
}
</style>
