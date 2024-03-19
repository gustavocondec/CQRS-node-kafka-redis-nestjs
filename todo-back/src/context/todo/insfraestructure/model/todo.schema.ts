import { TodoEntity } from '../../domain/todo.entity';
import { TodoStatusEnum } from '../../domain/todo-status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'todo',
})
export class TodoSchema implements TodoEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column({ type: 'enum', enum: TodoStatusEnum })
  status: TodoStatusEnum;
  @Column('timestamp')
  created_at: Date;
  @Column('timestamp')
  updated_at: Date;
}
