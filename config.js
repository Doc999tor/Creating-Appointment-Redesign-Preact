window._config = {}
_config.routing = [
  {
    path: 'choosing-client',
    urlQuery: 'client_id',
    image: 'choosing-client.svg'
  }, {
    path: 'selecting-procedure',
    urlQuery: 'services',
    image: 'selecting-procedure.svg'
  }, {
    path: 'date-selection',
    urlQuery: 'start',
    image: 'date-selection.svg'
  },
  // {
  //   path: 'choosing-worker',
  //   urlQuery: ['worker_id']
  // },
  {
    path: 'summary',
    urlQuery: '',
    image: 'summary.svg'
  }
]
_config.redirectToCurrentPage = {
  'selecting-procedure': ['client_id'],
  'date-selection': ['client_id', 'services'],
  'summary': ['client_id', 'services', 'start']
}
_config.urls = {
  base: 'https://api.bewebmaster.co.il/', // domain name
  base_static_data: 'https://api.bewebmaster.co.il/public/creating-appointment/', // all images
  base_client_data: 'https://api.bewebmaster.co.il/public/business_data/1/clients/', // clients photo
  static: './media/', // project images

  send_number: 'send-filling-up',
  add_client_link: 'https://atzma.im/en/add-client',

  proceduresBi: 'catalog/services/bi?client_id={client_id}',
  procedures: 'catalog/services',
  api_get_sms_credits: '/settings/sms/credits',
  api_patch_address: 'customers-details/clients/',
  api_put_appointments: 'appointments/', // :appointment_id
  api_add_client: 'add-client/clients',
  api_add_client_details: '/clients-list/',
  api_get_calendar_meeting: 'appointments/meeting',
  api_get_calendar_settings: 'appointments/settings',
  api_get_worker_settings: 'workers/',
  api_get_clients: 'creating-appointment/clients',
  api_get_favorites_clients: 'creating-appointment/clients/bi',
  api_get_customers_punch_cards: 'customers-details/clients/{client_id}/punch_cards', // for get ${_config.translations.global.punch_card}s => https://api.bewebmaster.co.il/customers-details/clients/2/punch_cards
  api_get_calendar_events: 'appointments',
  api_get_customer: 'customers-list/clients', // add-clients component
  api_get_map_key: `settings/maps-api-key?token=${token}`,

  redirect_after_success_appointment_create: 'https://atzma.im/en/calendar',
  api_post_break: '/break',
  api_post_procedures: 'catalog/services', // for add new procedures
  api_post_categories: 'catalog/services/categories', // for add new categories
  client_link: 'https://api.bewebmaster.co.il/en/creating-appointment/clients',
  sms_settings_link: '/settings/sms',
  default_picture: 'default_picture.png',
  error_page: 'https://api.bewebmaster.co.il/error_page',
  login: '/login',
  occasional_client_icon: '/dist/media/occasional_client.svg',

  worker_id: 'worker_id={worker_id}'
}
_config.reminders = [30, 120, 20160]
_config.user = {
  business_id: 777,
  worker_id: 7,
  permission_level: 'senior'
}
_config.plugins_list = [
  'gallery',
  'punch_cards',
  'custom_groups',
  'base',
  'multiple_workers',
  'colors',
  'medical_records'
]
_config.data = {
  is_address_based: true,
  is_reminders_set: true,
  is_reminders_shown: true,
  is_notifications_set: false,
  sms_minimum_required: 4,
  isRTL: false,
  event_overlap: false,
  listLimit: 20,
  max_duration_hours: 24,
  startOffset: 5,
  max_proc_shown_without_cat: 30,
  defaulftDebounceTime: 300, // for the function of the debounce, the second parameter is the time, through how much we will send the request
  min_appointment_duration: -10,
  default_appointment_duration: 75,
  min_price: 0,
  default_price: 10,
  price_step: 1,
  duration_step: 1,
  currency: '₴',
  default_color: '#fff',
  min_break_duration: 30,
  default_break_duration: 90,
  min_meeting_duration: 45,
  default_meeting_duration: 60,
  lang: 'ru',
  off_time_default_page_path: 'meeting' // break, meeting
}
_config.add_procedures = {
  color_procedures: [
   '#efa5fe',
   '#fff581',
   '#50e3c1',
   '#8edcf0',
   '#759bfa',
   '#4f2da7',
   '#b8e986',
   '#9013fe',
   '#3fb6dc',
   '#ff7052',
  ]
}

_config.translations = {
  ServicesSelectedMenu: {
    services_selected: 'Services selected'
  },
  DateSelection: {
    date: 'Date',
    time: 'Time',
    is_not_available_time: 'is not available Please select another time',
    time_should_greater: 'time should be greater {min_time}',
    not_more_than: 'not more than {max_time}',
    hours_must_be: 'hours must be a multiple of {hours}',
    minutes_must_be: 'minutes must be a multiple of {minutes}',
    seconds_must_be: 'seconds must be a multiple of {seconds}',
    working_day_begins: 'The working day begins with {time_start_or_end}',
    working_day_ends: 'The working day ends in {max_time} queue time {time_taken}',
    duration_goes_beyond: 'the duration goes beyond the working time {time_end}',
    queue_can_not: 'queue can not go beyond the day',
    have_date_and_time: "Every appointment has to have date and time. Otherwise we can't display the appointment in the calendar. Pls choose date and time.",
    ok: 'ok',
    too_long_duration: 'duration cannot be longer than {max_duration} hours',
    date_text_duration_not_valid: 'choose the correct duration'
  },

  personal_events: {
    title: 'Select OFF TIME activity'
  },
  global: {
    close: 'Close',
    punch_card: 'punch card',
    occasional_client: 'Occasional client',
    all_day: 'All day',
    start: 'Start',
    end_of_leave: 'end of leave',
    describe_the_vacation: 'describe the vacation',
    send_link: 'Send a link for fill up',
    enter_phone_number: 'Enter a phone number...',
    duration: 'Duration',
    price: 'Price',
    address_search: 'Address search',
    type_service: 'Type Service',
    type_client_name: 'Type Client’s Name',
    address: 'Address',
    minutes: 'min',
    hours: 'h',
    hryvnia: 'hryvnia',
    save: 'Save',
    skip: 'Skip',
    name: 'Name',
    next: 'Next',
    cancel: 'Cancel',
    from: 'from',
    at: 'at',
    back: 'back'
  },
  header: {
    off_time_button_text: 'off time'
  },
  favorites: {
    title: 'Suggestions'
  },
  selectingProcedures: {
    was_added: 'was added',
    no_name: 'no name'
  },
  add_new_procedures: {
    service_name: 'Service name',
    enter_procedure_name: 'Enter procedure name...',
    doesnt_exist_procedure: '{service_name} is not found. <br/> Please fill in the data.',
    select_color: 'Select color',
    choose_category_title: 'Choose category',
    add_new_category: 'add new category',
    btn_create_new_procedure: 'CREATE SERVICE',
    type_name_category: 'Type a name of a category'
  },
  remindersTimeService: {
    one_hour_past: 'An hour before',
    few_hours_past: 'In {hours} hours before',
    one_day_past: 'One day before',
    few_days_past: 'In {days} days before',
    one_week_past: 'One week before',
    few_weeks_past: 'In {weeks} weeks before'
  },
  summary: {
    no_credits_for_notifications: {
      main_text: 'You’ve run out of SMS. Notifications won’t be sent!',
      btn_label: 'Buy sms'
    },
    bottom_nav_next: 'send',
    hint_text: 'Hint text',
    cancel: 'Cancel',
    appoint: 'Appoint',
    chosen_procedures: 'Chosen procedures',
    repeating_queue: 'Repeating queue',
    meeting_on_the_road: 'Meeting on the road',
    sms_reminders: 'sms reminders',
    sms_will_sent: 'Sms will be sent',
    no_credits: 'You run out of SMS credits. Reminders won\'t be sent',
    settings: 'Settings',
    summary_notes: 'Notes',
    please_enter_address: 'Please enter an address',
    address: 'address',
    type_phone_number: 'Type phone number',
    no_phone_num: 'No phone number',
    notification_not_sent: 'Notifications will not be sent',
    ok_try: "Ok, I'll try",
    creating_appointment_failed: 'Sorry, creating your appointment failed, please select another time',
    fill_up: 'fill up',
    modal_set_address: 'Would you like to set this address as a permanent client’s address?',
    modal_only_now: 'only now'
  },
  off_time: {
    day: 'Day',
    start_time: 'Start time',
    end_time: 'End time',
    choose_time: 'Choose time',
    meeting: 'meeting',
    break: 'break'
  },
  categoriesList: {
    doesnt_exist_customers: "is not found. </br> Add this client to the cliest’s list?"
  },
  clientsList: {
    subject: 'Subject',
    add_day: 'All-day',
    name: 'Name',
    address: 'Address',
    send_link_successfully: 'The link is sent successfully.',
    send_link: 'Send',
    enter_first_name: 'Enter first name...',
    enter_phone_number: 'Type phone number',
    next_visit: 'Next visit',
    last_visit: 'Last visit',
    create_usr_back: 'SKIP',
    create_usr_next: 'ADD',
    add_client: 'add new client',
    edit_clients_profile: 'Edit client’s profile'
  },
  addCLient: {
    enter_number: 'Do you want to enter a phone number?',
    create_new: 'create new',
    able_to_send_sms: "We won't be able to send sms notifications",
    found_few_cleints: 'We found a few cleints with',
    number_not_filled: 'Phone number is not filled.',
    phone_number: 'phone number',
    send_link: 'Send a link',
    to_fill_up: 'To fill up'
  },
  dates: {
    month: {
      January: "January",
      February: "February",
      March: "March",
      April: "April",
      May: "May",
      June: "June",
      July: "July",
      August: "August",
      September: "September",
      October: "October",
      November: "November",
      December: "December"
    },
    weekdays: {
      'sunday': 'sunday',
      'monday': 'monday',
      'tuesday': 'tuesday',
      'wednesday': 'wednesday',
      'thursday': 'thursday',
      'friday': 'friday',
      'saturday': 'saturday'
    },
    days: {
      'yesterday': 'yesterday',
      'tommorow': 'tommorow',
      'today': 'today'
    }
  },
  // %d - the number of seconds, minutes, hours, months, and so on
  last_appointment: {
    was_a_less_than_a_minute: 'was a less than a minute',
    in_less_than_a_minute: 'in less than a minute',
    was_a_minute_ago: 'was a minute ago',
    in_a_minute: 'in a minute',
    was_a_hour_ago: 'was a hour ago',
    an_hour: 'in less than an hour',
    minutes: '%d minutes',
    was_a_hours_ago: 'was a %d hours ago',
    will_be_in_hours: 'will be in %d hours',
    yesterday: 'yesterday',
    tommorow: 'tommorow',
    was_a_days_ago: 'was a %d days ago',
    in_days: 'in %d days',
    was_a_week_ago: 'was a week ago',
    a_week_later: 'a week later',
    was_a_weeks_ago: 'was a %d weeks ago',
    in_weeks: 'in %d weeks',
    was_a_month_ago: 'was a month ago',
    will_be_in_a_month: 'will be in a month',
    was_a_months_ago: 'was a %d months ago',
    in_months: 'in %d months',
    was_a_year_ago: 'was a year ago',
    in_a_year: 'in a year',
    was_a_years_ago: 'was a %d years ago',
    after_years: 'after %d years',
    no_date: 'no date'
  }
}

_config.personalEvents = {
  menu: [
    {
      path: 'break',
      name: _config.translations.off_time.break
    },
    {
      path: 'meeting',
      name: _config.translations.off_time.meeting
    }
  ]
}
