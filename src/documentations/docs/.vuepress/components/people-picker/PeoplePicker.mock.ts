import { AzureAdService } from "@omnia/fx/services";
import { ServiceContainer } from "@omnia/fx";
import { AzureAdUser, AzureAdUserGroup, AzureAdObjectPrincipalTypes } from "@omnia/fx/models";


class MockAzureAdService {
    private identies: AzureAdUser[] = [
        {
            country: "",
            department: "Marketing",
            displayName: "Anne Reader",
            givenName: "Anne",
            jobTitle: "Manager",
            mail: "anne.reader@omniatestcloud.net",
            mailboxSettings: Object.create(null),
            objectId: "288bd87a-18ce-4753-a8b5-051fd6f0193f",
            surname: "Reader",
            type: 2,
            uid: "anne.reader@omniatestcloud.net",
            avatar: "",
            profileUrl: ""
        },
        {
            country: "",
            department: "Marketing",
            displayName: "Test1 Reader",
            givenName: "Test1",
            jobTitle: "Manager",
            mail: "anne.reader@omniatestcloud.net",
            mailboxSettings: Object.create(null),
            objectId: "a143c02d-4740-46f0-9c10-4194542abd93",
            surname: "Reader",
            type: 2,
            uid: "test1.reader@omniatestcloud.net",
            avatar: "",
            profileUrl: ""
        },
        {
            country: "",
            department: "Marketing",
            displayName: "Test2 Reader",
            givenName: "Test2",
            jobTitle: "Manager",
            mail: "anne.reader@omniatestcloud.net",
            mailboxSettings: Object.create(null),
            objectId: "8c4edfa0-c4f8-4c02-803d-c92f2020cc8e",
            surname: "Reader",
            type: 2,
            uid: "test2.reader@omniatestcloud.net",
            avatar: "",
            profileUrl: ""
        }
    ]

    public resolveUsersByUIDs(principalNamesOrIds: Array<string>) {

        return new Promise<AzureAdUserGroup>((resolve, reject) => {
            const result: AzureAdUserGroup = {
                groups: [],
                users: this.identies
            }

            result.users = result.users.filter(u => principalNamesOrIds
                .find(name => u.givenName.toLowerCase().indexOf(name.toLowerCase()) > -1) !== undefined);

            resolve(result);
        });

    }

    public searchUsers(key: string, principalType?: AzureAdObjectPrincipalTypes, handleCancelRequest?: (cancelToken) => void) {
        return new Promise<AzureAdUserGroup>((resolve, reject) => {
            const result: AzureAdUserGroup = {
                groups: [],
                users: this.identies
            }

            result.users = result.users.filter(u => u.givenName.toLowerCase().indexOf(key.toLowerCase()) > -1);

            resolve(result);
        });
    }
}

ServiceContainer.addMock(AzureAdService, new MockAzureAdService());