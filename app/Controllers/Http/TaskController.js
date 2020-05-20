"use strict";

const Task = use("App/Models/Task");

class TaskController {
  async index({ params }) {
    const tasks = await Task.query()
      .where("project_id", params.projects_id)
      .with("user")
      .fetch();

    return tasks;
  }

  async store({ params, request }) {
    const data = request.only([
      "user_id",
      "title",
      "description",
      "due_date",
      "file_id",
    ]);

    const tasks = await Task.create({
      ...data,
      project_id: params.projects_id,
    });

    return tasks;
  }

  async show({ params }) {
    const task = await Task.findOrFail(params.id);

    return task;
  }

  async update({ params, request }) {
    const data = request.only([
      "user_id",
      "title",
      "description",
      "due_date",
      "file_id",
    ]);

    task.merge(data);

    await task.save();

    return tasks;
  }

  async destroy({ params }) {
    const task = await Task.findOrFail(params.id);

    await task.delete();
  }
}

module.exports = TaskController;
