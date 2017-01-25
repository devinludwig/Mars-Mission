import { StoryPage } from './story-page.model';

export const STORYPAGES: StoryPage[] = [
  new StoryPage("You have died.", 0, "http://www.orderofthegooddeath.com/wp-content/uploads/2011/10/space_death_by_thecharles-d3inoc0-450x450.jpg", [{id: 1, option: "Start from the beginning"}]),

  new StoryPage("You, @name, have been picked for a mission to Mars.",
  1, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg",
  [{id: 2, option: "Get started"}, {id: 0, option: "Quit"}]),

  new StoryPage("You are about to take off.  Would you like to make sure you have everything you will need, or do you want to double-check?",
  2,
  "https://www.kennedyspacecenter.com/-/media/DNC/KSCVC/Event-Images/Rocket-Launches/atlas-v-401-night-launchpad.ashx?h=600&w=900&la=en&hash=B536FED5713AB61AC704442D0E25FCBBCEE40FA6",
  [{id: 3, option: "Double-check"}, {id: 0, option: "Just take off"}]),

  new StoryPage("You made it to Mars!  Do you want to orbit for awhile to find a good landing spot, or save time and food and land as soon as possible?",
  3,
  "http://www.geir.org/art/future/MarsLanding1.jpg",
  [{id: 4, option: "Find an ideal landing spot"}, {id: 0, option: "Land as soon as possible"}]),

  new StoryPage("Do you want to go explore the martian landscape or stay near your shuttle and set up camp?",
  4,
  "http://mks-onlain.ru/wp-content/uploads/2016/08/Poverhnost-Marsa.jpg",
  [{id: 5, option: "Set up camp"}, {id: 6, option: "Go Exploring"}]),
];
