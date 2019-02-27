import { Training } from './training';
import { date } from './date';

export class TrainingT3 extends Training {
    name: string =  'ЖЕНСКИЕ МАСТЕРА – МОДА, ПРИЧЕСКА НОВОБРАЧНОЙ'
    trainer: string =  'Надежда Самсонова, Екатерина Шафоростова'

    datesFirst: date[] = [
        { date: '05.03 (10:00 – 16:00)', selected: false },
        { date: '06.03 (10:00 – 16:00)', selected: false },
        { date: '07.03 (10:00 – 16:00)', selected: false },
        { date: '14.03 (10:00 – 16:00)', selected: false },
        { date: '15.03 (10:00 – 16:00)', selected: false },
        { date: '16.03 (10:00 – 16:00)', selected: false },

    ]

    datesSecond: [
        { date: '15.04 (10:00 – 16:00)', selected: false },
        { date: '16.04 (10:00 – 16:00)', selected: false },
        { date: '17.04 (10:00 – 16:00)', selected: false },
        { date: '18.04 (10:00 – 16:00)', selected: false }
    ]
}
