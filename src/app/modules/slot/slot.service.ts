import { TSlot } from "./slot.interface";
import { Slot } from "./slot.model";

const inserSlotInDB = async (payload: TSlot) => {
  const createdSlotData = await Slot.create(payload);
  return createdSlotData;
};
const getAllSlotsFromDB = async () => {
  const allSlotsData = await Slot.find();
  return allSlotsData;
};

const slotService = {
  inserSlotInDB,
  getAllSlotsFromDB,
};
export default slotService;
