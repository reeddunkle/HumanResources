
export const msToISO = (ms) => {
  var d = new Date(Number(ms));
  var date = d.toISOString().split('T')[0];
  return date;
}

export const getDateArray = (title, time) => {
  var dates;

  if (title !== '' && title !== undefined){
    dates = time.filter(t => t.title === title).map(t => {
      return msToISO(t.date);
    })
  } else {
    dates = time.map(t => {
      return msToISO(t.date);
    })
  };

  return Array.from(new Set(dates));
};

export const setDateStartArray = (dateEnd, dates) => {
  if (dateEnd !== '' && dateEnd !== undefined) {
    return dates.filter(d => d <= dateEnd);
  } else {
    return dates;
  }
};

export const setDateEndArray = (dateStart, dates) => {
  if (dateStart !== '' && dateStart !== undefined) {
    return dates.filter(d => d >= dateStart);
  } else {
    return dates;
  }
};

export const calcTimeInRange = (start, end, title, time) => {
  const isGTOE = (t) => (start == '' || msToISO(t.date) >= start);
  const isLTOE = (t) => (end == '' || msToISO(t.date) <= end);
  const hasSameTitle = (t) => (title == '' || t.title === title);

  return time.filter(t => {
    if (isGTOE(t) && isLTOE(t) && hasSameTitle(t)) {
      return t;
    }
  }).sort();
};

export const calcMinutes = (time) => {
  return time.reduce((acc, t) => acc + t.minutes, 0);
};