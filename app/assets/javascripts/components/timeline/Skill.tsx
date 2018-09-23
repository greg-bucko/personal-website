import * as React from "react";

import {
    FaAws,
    FaBook,
    FaCode,
    FaCss3,
    FaDatabase,
    FaDocker,
    FaFileCode,
    FaGithub,
    FaJava,
    FaJenkins,
    FaJs,
    FaNode,
    FaNpm,
    FaReact,
    FaSun,
} from "react-icons/fa";

import {
    GoTelescope,
} from "react-icons/go";

import {
    IoMdFlash,
    IoMdRocket,
} from "react-icons/io";

export interface ISkill {
    name: string;
    url?: string;
    icon?: JSX.Element;
}

interface ISkills {
    [id: string]: ISkill;
}

export const skills: ISkills = {
    agile: {
        name: "Agile",
    },
    akka: {
        name: "Akka",
        url: "https://akka.io/",
    },
    ansible: {
        name: "Ansible",
        url: "https://www.ansible.com/",
    },
    astronomy: {
        icon: <GoTelescope/>,
        name: "Astronomy",
    },
    async: {
        icon: <FaFileCode/>,
        name: "async",
        url: "https://caolan.github.io/async/",
    },
    aws: {
        icon: <FaAws/>,
        name: "AWS",
        url: "https://aws.amazon.com/",
    },
    bootstrap: {
        icon: <FaFileCode/>,
        name: "Bootstrap",
        url: "https://getbootstrap.com/",
    },
    business: {
        icon: <FaBook/>,
        name: "Business Studies",
    },
    c: {
        icon: <FaFileCode/>,
        name: "C",
    },
    c_plus_plus: {
        icon: <FaFileCode/>,
        name: "C++",
        url: "http://www.cplusplus.com/",
    },
    c_sharp: {
        icon: <FaFileCode/>,
        name: "C#",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    },
    cassandra: {
        icon: <FaDatabase/>,
        name: "Cassandra",
        url: "http://cassandra.apache.org/",
    },
    chroson: {
        name: "Chronos",
        url: "https://mesos.github.io/chronos/",
    },
    computing: {
        icon: <FaBook/>,
        name: "Computing",
    },
    css: {
        icon: <FaCss3/>,
        name: "CSS",
        url: "https://www.w3.org/standards/webdesign/htmlcss",
    },
    d3: {
        icon: <FaFileCode/>,
        name: "D3.js",
        url: "https://d3js.org/",
    },
    docker: {
        icon: <FaDocker/>,
        name: "Docker",
        url: "https://www.docker.com/",
    },
    dropwizard: {
        name: "Dropwizard",
        url: "https://www.dropwizard.io",
    },
    ejs: {
        icon: <FaFileCode/>,
        name: "EJS",
        url: "http://ejs.co/",
    },
    electronics: {
        icon: <IoMdFlash/>,
        name: "Electronics",
    },
    english: {
        icon: <FaBook/>,
        name: "English",
    },
    experimental_physics: {
        icon: <IoMdRocket/>,
        name: "Experimental Physics",
    },
    express: {
        icon: <FaFileCode/>,
        name: "Express",
        url: "https://expressjs.com/",
    },
    fluid_dynamics: {
        icon: <IoMdRocket/>,
        name: "Fluid Dynamics",
    },
    further_maths: {
        icon: <FaBook/>,
        name: "Further Mathematics",
    },
    github: {
        icon: <FaGithub/>,
        name: "GitHub",
        url: "https://github.com/",
    },
    html: {
        icon: <FaCode/>,
        name: "HTML",
        url: "https://www.w3.org/standards/webdesign/htmlcss",
    },
    java: {
        icon: <FaJava/>,
        name: "Java",
        url: "https://www.java.com/",
    },
    jenkins: {
        icon: <FaJenkins/>,
        name: "Jenkins",
        url: "https://jenkins.io/",
    },
    jira: {
        name: "Jira",
        url: "https://www.atlassian.com/software/jira",
    },
    jquery: {
        icon: <FaFileCode/>,
        name: "jQuery",
        url: "https://jquery.com/",
    },
    jquery_ui: {
        icon: <FaFileCode/>,
        name: "jQuery UI",
        url: "https://jqueryui.com/",
    },
    js: {
        icon: <FaJs/>,
        name: "JavaScript",
        url: "https://www.javascript.com/",
    },
    jsp: {
        icon: <FaFileCode/>,
        name: "JSP",
        url: "https://docs.oracle.com/javaee/5/tutorial/doc/bnagy.html",
    },
    jwt: {
        name: "JWT",
        url: "https://jwt.io/",
    },
    keycloak: {
        name: "Keycloak",
        url: "https://www.keycloak.org/",
    },
    lodash: {
        icon: <FaFileCode/>,
        name: "Lodash",
        url: "https://lodash.com/",
    },
    marathon: {
        name: "Marathon",
        url: "https://mesosphere.github.io/marathon/",
    },
    marathon_lb: {
        name: "Marathon-LB",
        url: "https://docs.mesosphere.com/services/marathon-lb/",
    },
    material_ui: {
        icon: <FaFileCode/>,
        name: "Material UI",
        url: "https://material-ui.com/",
    },
    maths: {
        icon: <FaBook/>,
        name: "Mathematics",
    },
    matlab: {
        icon: <FaFileCode/>,
        name: "Matlab",
        url: "https://www.mathworks.com/products/matlab.html",
    },
    mechanics: {
        icon: <IoMdRocket/>,
        name: "Mechanics",
    },
    mesos: {
        name: "Mesos",
        url: "http://mesos.apache.org/",
    },
    mesos_dns: {
        name: "Mesos DNS",
        url: "http://mesosphere.github.io/mesos-dns/",
    },
    minio: {
        name: "Minio",
        url: "https://www.minio.io/",
    },
    mongo_db: {
        icon: <FaDatabase/>,
        name: "MongoDB",
        url: "https://www.mongodb.com/",
    },
    mssql: {
        icon: <FaDatabase/>,
        name: "MSSql",
        url: "https://www.microsoft.com/en-us/sql-server/sql-server-2016",
    },
    node: {
        icon: <FaNode/>,
        name: "NodeJS",
        url: "https://nodejs.org",
    },
    npm: {
        icon: <FaNpm/>,
        name: "npm",
        url: "https://www.npmjs.com/",
    },
    particle_physics: {
        icon: <IoMdRocket/>,
        name: "Particle Physics",
    },
    perforce: {
        name: "Perforce",
        url: "https://www.perforce.com/",
    },
    photonics: {
        icon: <FaSun/>,
        name: "Photonics",
    },
    physics: {
        icon: <FaBook/>,
        name: "Physics",
    },
    play_framework: {
        name: "Play Framework",
        url: "https://www.playframework.com/",
    },
    postgresql: {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/",
    },
    quantum_mechanics: {
        icon: <IoMdRocket/>,
        name: "Quantum Mechanics",
    },
    quartz: {
        name: "Quartz",
        url: "http://www.quartz-scheduler.org/",
    },
    rabbitmq: {
        name: "RabbitMQ",
        url: "https://www.rabbitmq.com/",
    },
    react: {
        icon: <FaReact/>,
        name: "React",
        url: "https://reactjs.org/",
    },
    redis: {
        icon: <FaDatabase/>,
        name: "Redis",
        url: "https://redis.io/",
    },
    redux: {
        icon: <FaFileCode/>,
        name: "Redux",
        url: "https://redux.js.org",
    },
    renewable_energy: {
        icon: <IoMdRocket/>,
        name: "Renewable Energy Physics",
    },
    requirejs: {
        icon: <FaFileCode/>,
        name: "RequireJS",
        url: "https://requirejs.org/",
    },
    rest: {
        name: "REST",
    },
    solid_state: {
        icon: <IoMdRocket/>,
        name: "Solid State Physics",
    },
    swagger: {
        name: "Swagger",
        url: "https://swagger.io/",
    },
    tomcat: {
        name: "Tomcat",
        url: "http://tomcat.apache.org/",
    },
    typescript: {
        icon: <FaFileCode/>,
        name: "Typescript",
        url: "https://www.typescriptlang.org/",
    },
    vagrant: {
        name: "Vagrant",
        url: "https://www.vagrantup.com/",
    },
    webpack: {
        icon: <FaFileCode/>,
        name: "Webpack",
        url: "https://webpack.js.org/",
    },
    zookeeper: {
        name: "Zookeeper",
        url: "https://zookeeper.apache.org/",
    },
};
