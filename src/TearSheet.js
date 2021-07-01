import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {HeaderContainer} from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import React, { Component, useState, useEffect }  from 'react';
import { Button, RadioButtonGroup, RadioButton, NumberInput, TextInput, TextArea, FileUploader, Tabs, Tab} from 'carbon-components-react';
import { CreateTearsheet, CreateTearsheetStep } from "@carbon/ibm-cloud-cognitive/es/components/CreateTearsheet";
import CardComponent from "./CardComponent";
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


const StoryContent = () => {

  const [val, setVal] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [isInValidStep1, setisInValidStep1] = useState(true);
  const [isInValidStep2, setisInValidStep2] = useState(true);

  const handleClick = (e) => {
    setisOpen(!isOpen);
  }

  // const handleTextInputValid = (val) => {
  //   if(val!="")
  //     setisInValid(false);
  //   else
  //     setisInValid(true);
  // }

  const handleTextInputStep1 = (e) => {
    setisInValidStep1(false);
    //handleTextInput(val);
  }
  
  const handleTextInputStep2 = (e) => {
    setisInValidStep2(false);
    //handleTextInput(val);
  }

  const content = (
    <div className="bx--grid">
      <div className="bx--row">
      <div>
  <style>
    {`.exp--tearsheet-create-multi-step { opacity: 0 };`}

  </style>

  <Button
    dangerDescription="danger"
    disabled={false}
    isExpressive={true}
    kind="primary"
    onClick={handleClick}
    size="default"
    tabIndex={0}
    tooltipAlignment="center"
    tooltipPosition="top"
    type="button"
  >
    Open CreateTearsheet
  </Button>
  <CreateTearsheet
    open={isOpen}
    backButtonText="Back"
    cancelButtonText="Cancel"
    className="exp--tearsheet-create-multi-step"
    description="Specify details for the new project you want to create"
    label=""
    nextButtonText="Next"
    onClose={handleClick}
    onRequestSubmit={function noRefCheck(){}}
    submitButtonText="Create"
    title="Create Project"
    verticalPosition="normal"
  >
    
    <CreateTearsheetStep
      onNext={function noRefCheck(){}}
      title="Project Name"
      type="CreateTearsheetStep"
    >
      <h6 className="exp--tearsheet-create-multi-step__description exp--tearsheet-create-multi-step__heading">
        This is the name used to recognize your project
      </h6>
      <p className="exp--tearsheet-create-multi-step__description">
        It will also be used by your producers and consumers as part of the connection information, so make it something easy to recognize.
      </p>
      <TextInput
        disabled={false}
        helperText=""
        id="tearsheet-multi-step-story-text-input-multi-step-1"
        inline={false}
        invalid={isInValidStep1}
        invalidText="This is a required field"
        labelText="Project name"
        light={false}
        onBlur={function noRefCheck(){}}
        onChange={handleTextInputStep1}
        onClick={function noRefCheck(){}}
        placeholder="Enter project name"
        type="text"
        warn={false}
        warnText=""
        required={true}
      />
      
      
      <es_components_Toggle_Toggle
        className="exp--tearsheet-create-multi-step__error--toggle"
        id="simulated-error-toggle"
        labelText="Simulate error"
        onToggle={function noRefCheck(){}}
        size="sm"
      />
      <h6 className="exp--tearsheet-create-multi-step__description exp--tearsheet-create-multi-step__heading">
        Please Enter Your Project GitHub Url Link below
      </h6>
      <TextInput
        disabled={false}
        helperText=""
        id="tearsheet-multi-step-story-text-input-multi-step-2"
        inline={false}
        invalid={isInValidStep2}
        invalidText="This is a required field"
        labelText="Url Link"
        light={false}
        onBlur={function noRefCheck(){}}
        onChange={handleTextInputStep2}
        onClick={function noRefCheck(){}}
        placeholder="Enter topic name"
        type="text"
        warn={false}
        warnText=""
        required={true}
      />
      <FileUploader
          accept={[
            '.jpg',
            '.png',
            '.jpeg',
            '.svg'
          ]}
          buttonKind="primary"
          buttonLabel="Add Logo"
          filenameStatus="edit"
          iconDescription="Clear file"
          labelDescription="only .jpg/.png/.jpeg/.svg files at 5mb or less"
          labelTitle="Upload Logo"
        />
      <TextArea
      rows={10}
      cols={80}
      helperText=""
      id="test5"
      invalidText="Invalid error message."
      labelText="Write Your Project Description"
      placeholder="Placeholder text"
      >
      </TextArea>
    </CreateTearsheetStep>
    <CreateTearsheetStep
      title="Platform"
      type="CreateTearsheetStep"
    >
      <div style={{ width: '100%' }}>
      <Tabs scrollIntoView={false}>
        <Tab
          href="#"
          id="tab-1"
          label="Django"
        >
          <div className="some-content">
            Content for first tab goes here.
            <p></p>
          </div>
        </Tab>
        <Tab
          href="#"
          id="tab-2"
          label="Mongo DB"
        >
          <div className="some-content">
            Content for second tab goes here.
            <p></p>
          </div>
        </Tab>
        <Tab
          href="#"
          id="tab-3"
          label='Sql'
        >
          <div className="some-content">
            Content for third tab goes here.
            <p></p>
          </div>
        </Tab>
      </Tabs>
    </div>
    </CreateTearsheetStep>
    <CreateTearsheetStep
      title="Confirmation"
      type="CreateTearsheetStep"
    >
      <CardComponent></CardComponent>
    </CreateTearsheetStep>
  </CreateTearsheet>
</div>
      </div>
    </div>
  );
  return <Content id="main-content">{content}</Content>;
};


const TearSheet = () => {
    return(
      
      <StoryContent />

    );
}
 
export default TearSheet;