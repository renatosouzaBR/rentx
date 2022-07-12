import SpeedSvg from "../assets/speed.svg";
import UpSvg from "../assets/up.svg";
import ForceSvg from "../assets/force.svg";
import EnergySvg from "../assets/energy.svg";
import GasolineSvg from "../assets/gasoline.svg";
import HybridSvg from "../assets/hybrid.svg";
import ExchangeSvg from "../assets/exchange.svg";
import PeopleSvg from "../assets/people.svg";
import CarSvg from "../assets/car.svg";

export function getAccessoryIcon(type: string) {
  switch (type) {
    case "speed":
      return SpeedSvg;
    case "acceleration":
      return UpSvg;
    case "turning_diameter":
      return ForceSvg;
    case "electric_motor":
      return EnergySvg;
    case "exchange":
      return ExchangeSvg;
    case "seats":
      return PeopleSvg;
    case "gasoline_motor":
      return GasolineSvg;
    case "hybrid_motor":
      return HybridSvg;
    default:
      return CarSvg;
  }
}
