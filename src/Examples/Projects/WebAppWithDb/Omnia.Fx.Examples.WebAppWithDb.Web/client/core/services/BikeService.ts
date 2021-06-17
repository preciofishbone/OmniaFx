import { Inject, HttpClientConstructor, HttpClient, Injectable } from '@omnia/fx';
import { IHttpApiOperationResult, InstanceLifetimes, GuidValue, Guid, EnterprisePropertyDefinition, AzureAdUser } from '@omnia/fx-models';
import { WebAppWithDbService, BasicBike } from '../../models';

@Injectable({ lifetime: InstanceLifetimes.Transient })
export class BikeService {

    @Inject<HttpClientConstructor>(HttpClient, { configPromise: HttpClient.createOmniaServiceRequestConfig(WebAppWithDbService.Id) })
    private httpClient: HttpClient;

    private readonly baseUrl = "api";

    public order = <T extends BasicBike>(bikeToOrder: T): Promise<T> => {

        return new Promise<T>((resolve, reject) => {

            this.httpClient.post<IHttpApiOperationResult<T>>(this.baseUrl + "/orders", bikeToOrder).then((response) => {

                if (response.status == 200) {
                    if (response.data.success) {
                        resolve(response.data.data);
                    } else {
                        reject(response.data.errorMessage)
                    }
                } else {
                    reject(response.statusText);
                }

            }).catch(reject);
        });
    }

    public getUserOrders = (user: AzureAdUser): Promise<Array<BasicBike>> => {
        return new Promise<Array<BasicBike>>((resolve, reject) => {

            this.httpClient.get<IHttpApiOperationResult<Array<BasicBike>>>(this.baseUrl + "/orders/" + user.uid).then((response) => {

                if (response.status == 200) {
                    if (response.data.success) {
                        resolve(response.data.data);
                    } else {
                        reject(response.data.errorMessage)
                    }
                } else {
                    reject(response.statusText);
                }

            }).catch(reject);
        });
    }

    public getAllOrders = (): Promise<{ [userId: string]: Array<BasicBike>}> => {
        return new Promise<{ [userId: string]: Array<BasicBike> }>((resolve, reject) => {

            this.httpClient.get<IHttpApiOperationResult<{ [userId: string]: Array<BasicBike> }>>(this.baseUrl + "/orders").then((response) => {

                if (response.status == 200) {
                    if (response.data.success) {
                        resolve(response.data.data);
                    } else {
                        reject(response.data.errorMessage)
                    }
                } else {
                    reject(response.statusText);
                }

            }).catch(reject);
        });
    }

    public getAvailable = (): Promise<Array<BasicBike>> => {
        return new Promise<Array<BasicBike>>((resolve, reject) => {
            this.httpClient.get<IHttpApiOperationResult<Array<BasicBike>>>(this.baseUrl + "/available").then((response) => {

                if (response.status == 200) {
                    if (response.data.success) {
                        resolve(response.data.data);
                    } else {
                        reject(response.data.errorMessage)
                    }
                } else {
                    reject(response.statusText);
                }

            }).catch(reject);
        });
    }

}