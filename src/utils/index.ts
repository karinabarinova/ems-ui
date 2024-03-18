export const formatSalary = (salary: number) => {
    const formatter = new Intl.NumberFormat("en-CA");
    return formatter.format(salary);
};

export const formatDate = (date: string) => {
    const formatter = new Intl.DateTimeFormat('en', {day: '2-digit', month: 'short', year: 'numeric'});
    return formatter.format(new Date(date));
};
