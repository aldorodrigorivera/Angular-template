import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
export const config:CalendarOptions = {
  initialView: 'dayGridMonth',
  headerToolbar:{ start:'today prev,next', center:'title', end:'dayGridMonth,timeGridWeek,timeGridDay,listWeek'},
  locale:'es',
  locales: [esLocale],
  themeSystem: 'bootstrap',
  selectable: true,
  titleFormat: { year: 'numeric', month: 'long', day: 'numeric' }
}
