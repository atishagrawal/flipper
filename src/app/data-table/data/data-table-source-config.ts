import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UrlAwarePaginator } from '../../common/pagination/url-aware-paginator.service';

export interface DataTableSourceConfig<T> {
    uri?: string;
    dataPaginator?: UrlAwarePaginator;
    matPaginator?: MatPaginator;
    matSort?: MatSort;
    delayInit?: boolean;
    staticParams?: object;
    initialData?: T[];

}
