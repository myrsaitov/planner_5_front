import {TagModel} from '../tag/tag-model';

export interface ICreateAdvertisement {
  title: string;
  body: string;
  categoryId: number;
  tags: TagModel[];
}

export class CreateAdvertisement implements ICreateAdvertisement {
  body: string;
  categoryId: number;
  tags: TagModel[];
  title: string;

  constructor(data?: Partial<ICreateAdvertisement>) {
    const defaults: ICreateAdvertisement = {
      body: '',
      categoryId: null,
      tags: [],
      title: '',
      ...data
    };

    this.body = defaults.body;
    this.categoryId = defaults.categoryId;
    this.tags = defaults.tags;
    this.title = defaults.title;
  }
}
