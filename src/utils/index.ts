export const eventFields = [
    "id",
    "start_date",
    "end_date",

    "recurring",
    "RRULE",
    "STDATE",
    "DTEND",

    "recurringEventId",
    "originalStartTime",
    "status",

    "allDay",
    "type",
    "text",
    "details",
    "files"
];
export function getEventFields(event: Record<string, any>) {
    return Object.keys(event)
        .filter(key => eventFields.includes(key))
        .reduce((acc, key) => {
            acc[key] = event[key];
            return acc;
        }, {});
}

