import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import React, { Component }  from 'react';
import { Button, RadioButtonGroup, RadioButton, NumberInput} from 'carbon-components-react';
import { CreateTearsheet, CreateTearsheetStep } from "@carbon/ibm-cloud-cognitive/es/components/CreateTearsheet";
import {
    Content,
    Header,
    HeaderMenuButton,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem
  } from "carbon-components-react/lib/components/UIShell";

const TearSheet = () => {
    return ( 
        <div>
            <style>
                {`.exp--tearsheet-create-multi-step { opacity: 0 };`}
            </style>
            <Button
                dangerDescription="danger"
                disabled={false}
                isExpressive={false}
                kind="primary"
                onClick={function noRefCheck(){}}
                size="default"
                tabIndex={0}
                tooltipAlignment="center"
                tooltipPosition="top"
                type="button"
            >
                Open CreateTearsheet
            </Button>

            <CreateTearsheet
                open
                backButtonText="Back"
                cancelButtonText="Cancel"
                className="exp--tearsheet-create-multi-step"
                description="Specify details for the new topic you want to create"
                label="Project Description"
                nextButtonText="Next"
                onClose={function noRefCheck(){}}
                onRequestSubmit={function noRefCheck(){}}
                submitButtonText="Create"
                title="Create topic"
                verticalPosition="normal"
            >
            <CreateTearsheetStep
                onNext={function noRefCheck(){}}
                title="Topic name"
                type="CreateTearsheetStep"
            >
                    <textarea
                    disabled={false}
                    helperText=""
                    id="tearsheet-multi-step-story-text-input-multi-step-1"
                    inline={false}
                    invalid={false}
                    invalidText="This is a required field"
                    labelText="Topic name*"
                    light={false}
                    onBlur={function noRefCheck(){}}
                    onChange={function noRefCheck(){}}
                    onClick={function noRefCheck(){}}
                    placeholder="Enter topic name"
                    type="text"
                    value=""
                    warn={false}
                    warnText=""
                />
                        <h6 className="exp--tearsheet-create-multi-step__description exp--tearsheet-create-multi-step__heading">
                            This is the unique name used to recognize your topic
                        </h6>
                        <p className="exp--tearsheet-create-multi-step__description">
                            It will also be used by your producers and consumers as part of the connection information, so make it something easy to recognize.
                        </p>
                        
                        <es_components_Toggle_Toggle
                            className="exp--tearsheet-create-multi-step__error--toggle"
                            id="simulated-error-toggle"
                            labelText="Simulate error"
                            onToggle={function noRefCheck(){}}
                            size="sm"
                        />


                        <h6 className="exp--tearsheet-create-multi-step__description exp--tearsheet-create-multi-step__heading">
                            One or more partitions make up a topic. A partition is an ordered list of messages.
                        </h6>
                        <p className="exp--tearsheet-create-multi-step__description">
                            Partitions are distributed across the brokers in order to increase the scalability of your topic. You can also use them to distribute messages across the members of a consumer group.
                        </p>
                        
                        
                        <h6 className="exp--tearsheet-create-multi-step__description exp--tearsheet-create-multi-step__heading">
                            This is how long messages are retained before they are deleted.
                        </h6>
                        <p className="exp--tearsheet-create-multi-step__description">
                            If your messages are not read by a consumer within this time, they will be missed.
                        </p>
                        <NumberInput
                        helperText="1 partition is sufficient for getting started but, production systems often have more."
                        id="carbon-number"
                        invalidText="Max partitions is 100, min is 1"
                        label="Partitions"
                        max={100}
                        min={1}
                        onChange={function noRefCheck(){}}
                        value={1}
                        />

                        
                        <RadioButtonGroup
                            defaultSelected="one-day"
                            labelPosition="right"
                            legendText="Message retention"
                            name="radio-button-group"
                            onChange={function noRefCheck(){}}
                            orientation="vertical"
                        >
                            <RadioButton
                            id="one-day"
                            labelText="A day"
                            value="one-day"
                            />
                            <RadioButton
                            id="one-week"
                            labelText="A week"
                            value="one-week"
                            />
                            <RadioButton
                            id="one-month"
                            labelText="A month"
                            value="one-month"
                            />
                            <RadioButton
                            id="custom"
                            labelText="Custom"
                            value="custom"
                            />
                        </RadioButtonGroup>
                </CreateTearsheetStep>
            </CreateTearsheet>
            </div>
     );
}
 
export default TearSheet;