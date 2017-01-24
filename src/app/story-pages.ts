import { StoryPage } from './story-page.model';

export const STORYPAGES: StoryPage[] = [
  new StoryPage("You have died", 0, "", [{id: 2, option: "Get started"}, {id: 0, option: "Quit"}]),
  new StoryPage("You have been picked for a mission to Mars.", 1, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg", [{id: 2, option: "Get started"}, {id: 0, option: "Quit"}]),
  new StoryPage("Second Page", 2, "", [{id: 3, option: "Go to third"}, {id: 0, option: "Quit"}]),
];
