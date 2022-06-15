import dayjs from "dayjs";

const reminderUpcomingSMSTemplate = (
  title: string,
  organizerName: string,
  startTime: string,
  attendeeTimeZone: string
) => {
  const templateOne = `Hi, this is a reminder that you have a meeting (${title}) with
  ${organizerName} at ${dayjs(startTime).format("YYYY MMM D h:mmA")} ${attendeeTimeZone}`;

  //Twilio recomments message to be no longer than 320 characters
  if (templateOne.length <= 320) return templateOne;

  //Twilio supports up to 1600 characters
  const templateThree = `Hi, this is a reminder that you have a meeting with ${organizerName} at ${dayjs(
    startTime
  ).format("MMM D h:mmA")}`;

  //Twilio supports up to 1600 characters
  if (templateThree.length <= 1600) return templateThree;
};

export default reminderUpcomingSMSTemplate;
