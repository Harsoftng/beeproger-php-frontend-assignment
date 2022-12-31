import { ETodoStatus } from './ETodoStatus';
import { ETodoPriority } from './ETodoPriority';

export interface ITodo {
  id: number;
  title: string;
  description?: string;
  priority: ETodoPriority;
  status: ETodoStatus;
  startDate: string;
  photoUrl: string;
  created_at: string;
  updated_at?: string;
}
