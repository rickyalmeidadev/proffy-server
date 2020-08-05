import { Router } from 'express';
import db from './database/connection';
import convertHoursToMinutes from './utils/convertHoursToMinutes';

const routes = Router();

interface IScheduleItem {
  week_day: number;
  from: string;
  to:string
}

routes.post('/classes', async (request, response, next) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule,
  } = request.body;

  const trx = await db.transaction();

  try {
    const [user_id] = await trx('users').insert({
      name,
      avatar,
      whatsapp,
      bio,
    });

    const [class_id] = await trx('classes').insert({
      subject,
      cost,
      user_id,
    });

    const classSchedule = schedule.map((scheduleItem: IScheduleItem) => ({
      class_id,
      week_day: scheduleItem.week_day,
      from: convertHoursToMinutes(scheduleItem.from),
      to: convertHoursToMinutes(scheduleItem.to),
    }));

    await trx('class_schedule').insert(classSchedule);

    await trx.commit();

    return response.status(201).end();
  } catch (error) {
    await trx.rollback();

    return response.status(400).json({
      message: 'Error while creating new class',
      error,
    });
  }
});

export default routes;
