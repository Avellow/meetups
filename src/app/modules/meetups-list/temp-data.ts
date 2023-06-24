const desc = `
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget lectus id ligula faucibus pulvinar. Morbi
    interdum
    est a leo vestibulum, id euismod magna sagittis.Mauris bibendum turpis ex, ac posuere mi vulputate sit amet.
    Vivamus
    consequat dui eleifend, commodo risus id, rhoncus erat.Phasellus eget eros nec arcu egestas imperdiet.Aenean
    commodo
    dolor a nulla eleifend, eu tristique velit maximus.Praesent sollicitudin, quam vel mollis bibendum, dui risus
    euismod
    quam, non viverra mi risus sit amet ante.Vestibulum sagittis posuere arcu, et imperdiet enim facilisis vel.

    Morbi vel tempor nunc.Integer iaculis porttitor eros, non tempus mauris convallis euismod.Duis sit amet porta
    lacus.
    Donec et euismod lectus.Aliquam nec massa vitae nunc aliquam accumsan ac eget dolor.Proin augue augue, vehicula ut
    sodales vel, euismod non enim.Mauris eu purus ipsum.Praesent porta porta sapien vitae blandit.Maecenas a tellus
    et
    velit lobortis congue a in tellus.Fusce ultrices tortor est, sit amet volutpat orci elementum vitae.Aliquam eu
    porttitor lectus, tempus gravida erat.
 `;
const meetupOne = {
  id: 1,
  name: 'Angular vs react',
  description: desc,
  location: 'Переговорка 4',
  target_audience: 'Разработчики, аналитики',
  need_to_know: 'Ядренную физику',
  will_happen: 'Будем готовить пиццу',
  reason_to_come: 'Надо',
  time: '2025-06-13T06:14:13.094Z',
  duration: 90,
  createdBy: 1,
  owner: {
    id: 1,
    email: 'pam@dundermifflin.com',
    password: 'password',
    fio: 'Ivan Ivanov',
  },
  users: [
    {
      id: 1,
      email: 'pam@dundermifflin.com',
      password: 'password',
      fio: 'password',
    },
    {
      id: 2,
      email: 'pam@dundermifflin.com',
      password: 'password',
      fio: 'password',
    },
    {
      id: 3,
      email: 'pam@dundermifflin.com',
      password: 'password',
      fio: 'password',
    },
    {
      id: 4,
      email: 'pam@dundermifflin.com',
      password: 'password',
      fio: 'password',
    },
    {
      id: 5,
      email: 'pam@dundermifflin.com',
      password: 'password',
      fio: 'password',
    },
  ],
};

const meetupThree = {
  id: 2,
  name: 'Best practices',
  description: desc,
  location: 'Переговорка 4',
  target_audience: 'Разработчики, аналитики',
  need_to_know: 'Ядренную физику',
  will_happen: 'Будем готовить пиццу',
  reason_to_come: 'Надо',
  time: '2023-09-13T14:14:13.094Z',
  duration: 180,
  createdBy: 3,
  owner: {
    id: 3,
    email: 'pam@dundermifflin.com',
    password: 'password',
    fio: 'Новиков',
  },
  users: [
    {
      id: 3,
      email: 'pam@dundermifflin.com',
      password: 'password',
      fio: 'password',
    },
  ],
};

const meetupTwo = {
  id: 2,
  name: 'Angular vs vue',
  description: desc,
  location: 'Переговорка 4',
  target_audience: 'Разработчики, аналитики',
  need_to_know: 'Ядренную физику',
  will_happen: 'Будем готовить пиццу',
  reason_to_come: 'Надо',
  time: '2023-06-13T06:14:13.094Z',
  duration: 60,
  createdBy: 2,
  owner: {
    id: 2,
    email: 'pam@dundermifflin.com',
    password: 'password',
    fio: 'Петр Петров',
  },
  users: [
    {
      id: 1,
      email: 'pam@dundermifflin.com',
      password: 'password',
      fio: 'password',
    },
    {
      id: 2,
      email: 'pam@dundermifflin.com',
      password: 'password',
      fio: 'password',
    },
    {
      id: 3,
      email: 'pam@dundermifflin.com',
      password: 'password',
      fio: 'password',
    },
    {
      id: 4,
      email: 'pam@dundermifflin.com',
      password: 'password',
      fio: 'password',
    },
  ],
};

export const meetups = [meetupOne, meetupTwo, meetupThree];