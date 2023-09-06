import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './create-todo.dto';
import { generate } from 'shortid';

@Injectable()
export class TodoService {
  private todosDb: Todo[] = [];

  findAll(): any {
    return [...this.todosDb];
  }

  create(todoTitle: string, todoDescription: string): any {
    const id = generate();
    const newTodo = new Todo(id, todoTitle, todoDescription);
    this.todosDb = this.todosDb.concat(newTodo);
  }

  findOne(id) {
    const todo = this.todosDb.find((item) => item.id === id);
    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }

  deleteTodoById(id) {
    const todoIndex = this.todosDb.findIndex((item) => item.id === id);
    if (todoIndex === -1) {
      throw new NotFoundException();
    }

    this.todosDb.splice(todoIndex, 1);

    return {
      message: 'todo deleted',
    };
  }

  updateTodoById(todoId, todoTitle, todoDescription) {
    let currentTodo = this.todosDb.find((item) => item.id === todoId);
    if (!currentTodo) {
      throw new NotFoundException();
    }
    currentTodo = {
      ...currentTodo,
      todoTitle,
      todoDescription,
    };

    return currentTodo;
  }
}
