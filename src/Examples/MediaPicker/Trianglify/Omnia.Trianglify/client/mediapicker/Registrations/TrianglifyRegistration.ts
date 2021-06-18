import { MediaPickerProvider, GuidValue, MediaPickerEnums, IIcon, SvgIcon, MediaPickerVideo, MediaPickerPersistedImage, FontAwesomeIcon } from '@omnia/fx-models';

export class TrianglifyRegistration implements MediaPickerProvider {
    id: GuidValue;
    category: string;
    name: string;
    icon: IIcon;
    sortOrder?: number;
    selectableMediaTypes: MediaPickerEnums.OmniaMediaTypes[];
    providerComponentId: GuidValue;

    constructor() {
        this.id = "bacde9a9-d188-4802-a462-04a56941663d";
        this.category = "image";
        this.name = "Trianglify";
        this.icon = new FontAwesomeIcon("fal fa-amp-guitar");
        this.providerComponentId = "72a2d872-794c-4493-9a69-6a26040b954d";
        this.selectableMediaTypes = [MediaPickerEnums.OmniaMediaTypes.Image];
        this.sortOrder = 41;
    }

    hasEditorForMedia = (media: MediaPickerVideo | MediaPickerPersistedImage): boolean => {
        return false;
    }
}




