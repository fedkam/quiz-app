import { Man } from 'components/Rating';

/** Local Storage Controller */
export class LSController {
  static nameStorage = 'quiz_rating';

  static getRating = (nameStorage = LSController.nameStorage): Man[] => {
    const ratingLS = window?.localStorage?.getItem(nameStorage);
    return ratingLS ? JSON.parse(ratingLS) : [];
  };

  static addUserProgress = (
    userProgress: Man,
    nameStorage = LSController.nameStorage
  ) => {
    const ratingLS: Man[] = LSController.getRating();
    if (Array.isArray(ratingLS)) {
      ratingLS.push(userProgress);
      window?.localStorage?.setItem(nameStorage, JSON.stringify(ratingLS));
    } else {
      window?.localStorage?.setItem(nameStorage, JSON.stringify([ratingLS]));
    }
  };
}
