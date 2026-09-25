export interface SalonStatus {
  isOpen: boolean;
  statusText: 'Aberto agora' | 'Fechado no momento';
  details: string;
  todayDayOfWeek: number; // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
}

export function getSalonStatus(): SalonStatus {
  // Use America/Maceio timezone (UTC-3)
  const now = new Date();
  const maceioDateStr = now.toLocaleString('en-US', { timeZone: 'America/Maceio' });
  const maceioDate = new Date(maceioDateStr);

  const day = maceioDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = maceioDate.getHours();
  const minutes = maceioDate.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  // Tuesday (2) to Friday (5): 08:30 to 18:30
  // 08:30 = 510 minutes; 18:30 = 1110 minutes
  if (day >= 2 && day <= 5) {
    if (currentMinutes >= 510 && currentMinutes < 1110) {
      return {
        isOpen: true,
        statusText: 'Aberto agora',
        details: 'Fecha às 18:30',
        todayDayOfWeek: day,
      };
    } else if (currentMinutes < 510) {
      return {
        isOpen: false,
        statusText: 'Fechado no momento',
        details: 'Abre hoje às 08:30',
        todayDayOfWeek: day,
      };
    } else {
      // After 18:30
      if (day === 5) {
        // Friday night -> Saturday opens at 08:00
        return {
          isOpen: false,
          statusText: 'Fechado no momento',
          details: 'Abre amanhã (Sábado) às 08:00',
          todayDayOfWeek: day,
        };
      }
      return {
        isOpen: false,
        statusText: 'Fechado no momento',
        details: 'Abre amanhã às 08:30',
        todayDayOfWeek: day,
      };
    }
  }

  // Saturday (6): 08:00 to 19:00
  // 08:00 = 480 minutes; 19:00 = 1140 minutes
  if (day === 6) {
    if (currentMinutes >= 480 && currentMinutes < 1140) {
      return {
        isOpen: true,
        statusText: 'Aberto agora',
        details: 'Fecha às 19:00',
        todayDayOfWeek: day,
      };
    } else if (currentMinutes < 480) {
      return {
        isOpen: false,
        statusText: 'Fechado no momento',
        details: 'Abre hoje às 08:00',
        todayDayOfWeek: day,
      };
    } else {
      return {
        isOpen: false,
        statusText: 'Fechado no momento',
        details: 'Abre terça-feira às 08:30',
        todayDayOfWeek: day,
      };
    }
  }

  // Sunday (0) or Monday (1): Closed (Atendimento com hora marcada)
  if (day === 0) {
    return {
      isOpen: false,
      statusText: 'Fechado no momento',
      details: 'Abre terça-feira às 08:30',
      todayDayOfWeek: day,
    };
  }

  // Monday (1)
  return {
    isOpen: false,
    statusText: 'Fechado no momento',
    details: 'Abre amanhã (Terça) às 08:30',
    todayDayOfWeek: day,
  };
}
