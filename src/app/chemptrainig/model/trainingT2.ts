import { Training } from './training';
import { date } from './date';

export class TrainingT2 extends Training {
    name: string =  'МУЖСКИЕ МАСТЕРА – ТЕХНИКА'
    trainer: string =  'Маслеников Владимир'
    trainerSecond: string = 'Андрианова Оксана';

    datesFirst: date[] = [
        { date: '01.03 (10:00 – 16:00)', selected: false },
        { date: '02.03 (10:00 – 16:00)', selected: false },
        { date: '04.03 (10:00 – 16:00)', selected: false },
        { date: '23.03 (10:00 – 16:00)', selected: false },
        { date: '24.03 (10:00 – 16:00)', selected: false },
        { date: '30.03 (10:00 – 16:00)', selected: false },
        { date: '31.03 (10:00 – 16:00)', selected: false }
    ]

    datesSecond: date[] = [
        { date: '15.04 (10:00 – 16:00)', selected: false },
        { date: '16.04 (10:00 – 16:00)', selected: false },
        { date: '17.04 (10:00 – 16:00)', selected: false },
        { date: '18.04 (10:00 – 16:00)', selected: false }
    ]

}