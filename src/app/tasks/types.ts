export type Task = {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

export type TaskForm = {
  [key in keyof Task]+?: string | boolean
}
