
interface CategoryPathRoot {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  pathRoot: CategoryPathRoot[];
}
