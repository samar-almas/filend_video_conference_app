import React, { useEffect, useState } from "react";

const DateTimeDisplay: React.FC = () => {
  const [formattedDateTime, setFormattedDateTime] = useState<string>("");

  const getFormattedDateTime = (): string => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      weekday: "short",
      month: "short",
      day: "numeric",
    };

    const now = new Date();
    return now.toLocaleString("en-US", options);
  };

  useEffect(() => {
    const updateDateTime = (): void => {
      setFormattedDateTime(getFormattedDateTime());
    };

    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{formattedDateTime}</span>;
};

export default DateTimeDisplay;
