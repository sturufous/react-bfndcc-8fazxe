import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { SampleBase } from './sample-base';
import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar } from '@syncfusion/ej2-react-filemanager';
/**
 * File Manager full functionalities sample
 */
export class Overview extends SampleBase {
    hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    render() {
        return (<div>
                <div className="control-section">
                    <FileManagerComponent id="overview_file" ajaxSettings={{
                url: this.hostUrl + "api/FileManager/FileOperations",
                getImageUrl: this.hostUrl + "api/FileManager/GetImage",
                uploadUrl: this.hostUrl + 'api/FileManager/Upload',
                downloadUrl: this.hostUrl + 'api/FileManager/Download'
            }} view={"Details"}>
                <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
                    </FileManagerComponent>
                </div>
            </div>);
    }
}

render(<Overview />, document.getElementById('sample'));