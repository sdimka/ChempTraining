import { Training } from './training';
import { date } from './date';

export class TrainingT6 extends Training {
    name: string =  'ЖЕНСКИЕ МАСТЕРА – ПЛЕТЕНИЕ, СТРИЖКА'
    trainer: string =  'Кошкарева Нелли'
    trainerSecond: string = 'Кошкарева Нелли';

    datesFirst: date[] = [
        { date: '14.03 (10:00 – 16:00)', selected: false },
        { date: '15.03 (10:00 – 16:00)', selected: false },
        { date: '16.03 (10:00 – 16:00)', selected: false },

    ]

    datesSecond: date[] = [
        { date: '15.04 (10:00 – 16:00)', selected: false },
        { date: '16.04 (10:00 – 16:00)', selected: false },
        { date: '17.04 (10:00 – 16:00)', selected: false },
        { date: '18.04 (10:00 – 16:00)', selected: false }
    ]
}