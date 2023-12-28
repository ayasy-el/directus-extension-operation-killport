export default {
  id: "kill_port",
  name: "Kill Port",
  icon: "hide_source",
  description: "To terminate a specific port",
  overview: ({ port }) => [
    {
      label: "Port to kill",
      text: port,
    },
  ],
  options: [
    {
      field: "port",
      name: "Port to kill",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
  ],
};
