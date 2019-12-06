import { BlockDataWithSettingsAndData } from '@omnia/wcm/models'

//For any settings that set through the block component, put it here
export interface HelloOmniaFxBlockDataData {

}

//For any settings that set through the block settings component, put it here
//All the settings here will have the inheritance rule follow the wcm concept.
export interface HelloOmniaFxBlockDataSettings {
    
    header: string
} 

export interface HelloOmniaFxBlockData extends BlockDataWithSettingsAndData<HelloOmniaFxBlockDataData, HelloOmniaFxBlockDataSettings> {

}
