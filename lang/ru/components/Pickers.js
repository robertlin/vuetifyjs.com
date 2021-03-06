export default {
  header: 'Picker',
  headerText: '`v-date-picker` и` v-time-picker` являются автономными компонентами, которые могут использоваться во многих существующих компонентах Vuetify. Они предлагают пользователю визуальное представление для выбора даты и времени.',
  components: ['v-date-picker', 'v-time-picker'],
  examples: [{
    dateLight: {
      header: 'Выбор даты',
      desc: 'Выбор даты осуществляется в двух вариантах ориентации: портретная **(по умолчанию)** и альбомная.'
    },
    dateColorable: {
      header: 'Выбор даты - Цвета',
      desc: 'Цвета Выбора даты можно установить с помощью `color` и `header-color`. Если `header-color` не указан, заголовок будет использовать значение `color`.'
    },
    dateDialogAndMenu: {
      header: 'Выбор даты - В диалоговом окне и меню',
      desc: 'При интеграции, в поле `v-text-field` рекомендуется использовать **readonly**. Это предотвратит запуск мобильных клавиатур. Чтобы сохранить вертикальное пространство, вы также можете скрыть заголовок Выбора даты. \n\n Выбор даты предоставляет доступный слот, который позволяет вам подключаться к функциям сохранения и отмены. Это позволит сохранить старое значение, которое может быть заменено, если пользователь отменит свой выбор.'
    },
    dateAllowedDates: {
      header: 'Выбор даты - Допустимые даты',
      desc: 'Вы можете указать допустимые даты с использованием массивов, объектов и функций.'
    },
    dateInternationalization: {
      header: 'Выбор даты - интернационализация',
      desc: 'Выбор даты поддерживает интернационализацию через объект JavaScript Date. Укажите тег языка BCP 47, используя `locale`, а затем установите первый день недели с помощью свойства `first-day-of-week`.'
    },
    dateIcons: {
      header: 'Выбор даты - Иконки',
      desc: 'Вы можете переопределить иконки по умолчанию, используемые в Выборе даты'
    },
    monthLight: {
      header: 'Выбор месяца',
      desc: 'Выбор месяца осуществляется в двух вариантах ориентации: портретная **(по умолчанию)** и альбомная.'
    },
    monthColorable: {
      header: 'Выбор месяца - цвета',
      desc: 'Цвета Выбора месяца можно установить с помощью `color` и` header-color`. Если `header-color` не указан, заголовок будет использовать значение `color`.'
    },
    monthDialogAndMenu: {
      header: 'Выбор месяца - В диалоговом окне и меню',
      desc: 'При интеграции, в `v-text-field` рекомендуется использовать **readonly** prop. Это предотвратит запуск мобильных клавиатур. Чтобы сохранить вертикальное пространство, вы также можете скрыть заголовок Выбора месяца. \n\n Выбор месяца предоставляет доступный слот, который позволяет вам подключаться к функциям сохранения и отмены. Это позволит помнить старое значение, которое может быть заменено, если пользователь отменит свой выбор.'
    },
    monthAllowedMonths: {
      header: 'Выбор месяца - Допустимые месяцы',
      desc: 'Вы можете указать допустимые месяцы, используя массивы, объекты и функции.'
    },
    monthInternationalization: {
      header: 'Выбор месяца - интернационализация',
      desc: 'Выбор месяца поддерживает интернационализацию через объект JavaScript Date. Укажите тег языка BCP 47, используя `locale`, а затем установите первый день недели с помощью свойства `first-day-of-week`.'
    },
    monthIcons: {
      header: 'Выбор месяца - Иконки',
      desc: 'Вы можете переопределить иконки по умолчанию, используемые в Выборе месяца'
    },
    timeLight: {
      header: 'Выбор времени',
      desc: 'У Выбора времени по умолчанию включена светлая тема.'
    },
    timeColorable: {
      header: 'Выбор времени - Цвета',
      desc: 'Цветовая схема Выбора времени может быть установлена с помощью `color` и `header-color`. Если `header-color` не указан, заголовок будет использовать значение `color`'
    },
    timeDialogAndMenu: {
      header: 'Выбор времени - В диалоговом окне и меню',
      desc: 'Благодаря гибкости Picker вы действительно можете собрать на любой случай, именно так, как вы этого хотите.'
    },
    time24hFormat: {
      header: 'Выбор времени - 24-часовой формат',
      desc: 'Выбор времени можно переключить на 24-часовой формат.'
    },
    timeAllowedTimes: {
      header: 'Выбор времени - Допустимое время',
      desc: 'Вы можете указать допустимые времена, используя массивы, объекты и функции.'
    }
  }],
  props: {
    'v-date-picker': {
      type: 'Определяет тип - `date` для выбора даты,` month` для выбора месяца',
      monthFormat: 'Функция форматирования, используемая для отображения месяцев в таблице месяцев. Вызывается с датой(строка ISO 8601) и locale(строка).',
      allowedDates: 'Ограничивает, какие даты могут быть выбраны',
      locale: 'Устанавливает языковой стандарт. Принимает строку с тегом языка BCP 47.',
      firstDayOfWeek: 'Устанавливает первый день недели, начиная с 0 для воскресенья.',
      titleDateFormat: 'Позволяет настроить формат строки даты, который отображается в заголовке выбора даты. Вызывается с датой(строка ISO 8601) и locale(строка).',
      headerDateFormat: 'Позволяет настроить формат строки месяца, который отображается в заголовке календаря. Вызывается с датой (строка ISO 8601) и locale (строка).',
      yearFormat: 'Позволяет настроить формат строки года, отображаемой в заголовке календаря. Вызывается с датой (строка ISO 8601) и locale(строка).',
      dayFormat: 'Позволяет настроить формат дневной строки, отображаемой в таблице даты. Вызывается с датой (строка ISO 8601) и locale(строка).',
      yearIcon: 'Создает Иконку рядом с годом',
      appendIcon: 'Устанавливает иконку для кнопки следующего месяца/года',
      prependIcon: 'Устанавливает иконку для кнопки предыдущий месяц/год'
    },
    'v-time-picker': {
      format: 'Доступны следующие опции: `am/pm` и` 24ч`',
      allowedHours: 'Ограничивает, часы которые могут быть выбраны',
      allowedMinutes: 'Ограничивает, какие минуты можно выбрать'
    }
  }
}
