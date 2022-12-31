export enum HanoiError {
  BackgroundColorClassesArrayEmpty = "The background color classes array is empty.",
  CannotMoveDiskFromEmptyTower = "A disk cannot be moved from an empty tower.",
  CannotMoveDiskToSameTower = "A disk cannot be moved to the same tower.",
  CannotMoveLargerDiskOntoSmallerDisk = "A larger disk cannot be moved onto a smaller disk.",
  CannotRemoveTopDiskFromEmptyTower = "The top disk cannot be removed from an empty tower.",
  InvalidInitialPosition = "The initial position must be at least 0.",
  InvalidNotificationType = "The notification type is invalid.",
  MinimumNumberOfDisksNotMet = "The number of disks must be at least 3.",
  TowerContentHasNoDisks = "The tower content does not have any disks.",
  TowerContentNotFound = "The tower content could not be found.",
  TowerContentNotFoundForTowerNumber = "The tower content for tower number %s could not be found.",
  TowerContentsArrayEmpty = "The tower contents array is empty.",
}
