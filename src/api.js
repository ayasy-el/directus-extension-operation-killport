import fkill from "fkill";

export default {
  id: "kill_port",
  handler: async ({ port }) => {
    try {
      await fkill(`:${port}`, { force: true });
      return { message: `Port ${port} has been successfully terminated` };
    } catch (error) {
      throw { error };
    }
  },
};
