import * as R from "ramda";
import * as React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";

import {ISkill} from "./Skill";
import TimelineContainerInstitution from "./TimelineContainerInstitution";
import TimelineContainerRole from "./TimelineContainerRole";
import TimelineContainerSkills from "./TimelineContainerSkills";

export interface ITimelineItem {
    icon: JSX.Element;
    color: string;
    date: string;
    institution: string;
    location: string;
    role: string;
    description: string;
    skills: ISkill[];
}

interface ITimelineContainerProps {
    items: ITimelineItem[];
}

export default class TimelineContainer extends React.Component<ITimelineContainerProps> {

    private readonly renderItems = R.addIndex<ITimelineItem>(R.map)((item: ITimelineItem, index: number) => {
        const renderSkills: JSX.Element | null = !R.isEmpty(item.skills) ? (
            <TimelineContainerSkills
                items={item.skills}
                color={item.color}
            />
        ) : null;

        return (
            <VerticalTimelineElement
                key={index}
                date={item.date}
                icon={item.icon}
            >
                <TimelineContainerInstitution
                    institution={item.institution}
                    location={item.location}
                />
                <TimelineContainerRole
                    color={item.color}
                    role={item.role}
                    description={item.description}
                />
                {renderSkills}
            </VerticalTimelineElement>
        );
    }, this.props.items);

    public render() {
        return (
            <div className="timeline">
                <VerticalTimeline animate={false}>
                    {this.renderItems}
                </VerticalTimeline>
            </div>
        );
    }
}
