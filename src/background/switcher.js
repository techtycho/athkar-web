const flowers = "/assets/flowers.jpg";
const wall = "/assets/wall.jpeg";
const mosque = "/assets/mosque.jpg";

export const images = {
  flowers,
  wall,
  mosque,
};

export const imageList = [flowers, wall, mosque];

export function changeBackground(element, image) {
  element.style.backgroundImage = `url(${image})`;
}
