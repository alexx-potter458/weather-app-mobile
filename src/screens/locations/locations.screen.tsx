import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HorizontalSpace } from "../../components/horizontal-space/horizontal-space.component";
import { Routes } from "../../router/router.types";

type LocationsProps = NativeStackScreenProps<Routes, "Locations">;
export const Locations = () => {
  return <HorizontalSpace />;
};
