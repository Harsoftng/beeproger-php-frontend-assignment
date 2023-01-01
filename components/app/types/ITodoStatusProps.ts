export interface ITodoStatusProps {
  status: AllTodoRoutingStatusType;
}

export type AllTodoRoutingStatusType = 'all' | 'completed' | 'pending';
