import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import './CurrentProjects.scss';
import {currentProjects} from './../../../api/projects';

import facebook from './../../../media/icons/facebook.png';
import twitter from './../../../media/icons/twitter.png';
import instagram from './../../../media/icons/instagram.png';

let projectIndex = 0;
export default function CurrentProjects (){
    const projects = currentProjects.map((project,index)=>displayCurrentProjects(project,index));

    function runIntroAnim(){
        const currentProjectsEl = document.querySelector('.CurrentProjects');
        currentProjectsEl.style.display = 'grid';
        const projects = document.querySelectorAll('.project');
        projects.forEach((project, index)=>{
            setTimeout(()=>{
                project.style.opacity = 1;
                project.style.top = 0;
            }, index*100+50)
        })

    }
    function closeProjectDetails(){
        const detailsBox = document.querySelector('.project__details');
        detailsBox.style.display = 'none';
    }
    useEffect(()=>{
        const introAnim = setTimeout(runIntroAnim,3500);

        return ()=>{
            clearTimeout(introAnim);
        }
    })

    return(
        <div className="CurrentProjects">
            <div className="projects">
                {projects}
                <ProjectsDetails/>
            </div>
            <div>
                <div className="btn" onClick={showHomeHiddenEl}>Past Projects</div>
            </div>
        </div>
    )

}
function displayCurrentProjects(project,index){
    const { cls, links, desc, imgs, projectName, subpageURL, role} = project;
    const { name }= projectName;
    const logo = imgs.logo ? <img src={require('./../../../media/logos/'+imgs.logo)}
                                    alt={name}
                                    className="project__logo"
                                    data-project={cls}/> :
                            <div className="project__logo bg__sqr font_themed"   data-project={cls}>{name}</div>    ;

    return(
        <div className = {`project ${cls}`} key = {`box_${cls}`}>
            <div className="cover">
                {logo}
                <div className="project__role cover" onClick={() => displayProjectsDeatils(index)} >
                    {role.title}
                </div>
            </div>

        </div>
    )
}
function displayProjectsDeatils(index){
    projectIndex = index;
    console.log(projectIndex)
    document.querySelector('.projects').scrollIntoView({block: "center"});
    const detailsBox = document.querySelector('.projectsDetails__box');
    detailsBox.style.display = 'block';

    const projectBoxW = document.querySelector('.projects').offsetWidth;
    const projectDetailsUl = document.querySelector('.projectsDetails__box ul');
    projectDetailsUl.style.width = projectBoxW * currentProjects.length + 'px';
    slideProjectDetailsList(projectIndex);

}
function slideProjectDetailsList(index){
    const projectBoxW = document.querySelector('.projects').offsetWidth;
    const projectDetailsUl = document.querySelector('.projectsDetails__box ul');
    console.log(projectIndex)
    if(index<0){
        projectIndex = currentProjects.length-1;
        // projectDetailsUl.style.transition = '0s';
    }
    if(index>currentProjects.length-1){
        projectIndex = 0;
    }
    console.log(projectIndex)
    projectDetailsUl.style.left = -1 * projectBoxW * projectIndex + 'px';
}

function ProjectsDetails(){
    const projectsDetailsList = currentProjects.map(project=>displayProjectDetails(project));
    return(
        <div className="projectsDetails__box cover">
            <ul>{projectsDetailsList}</ul>
            <div className="projectsDetails__nav">
                <div className="projectsDetails__nav_lft" onClick={()=>slideProjectDetailsList(--projectIndex)}>&#10148;</div>
                <div className="projectsDetails__nav_rgt" onClick={()=>slideProjectDetailsList(++projectIndex)}>&#10148;</div>
                <div className="projectsDetails__nav_close" onClick={closeProjectDetails}>&#10006;</div>
            </div>
        </div>
    )
}
function closeProjectDetails(){
    document.querySelector('.projectsDetails__box').style.display = 'none';
}
function displayProjectDetails(project){
    const { cls, links, desc, imgs, projectName, subpageURL, role} = project;
    return(
        <li key={`projectsDetails_li_${cls}`} className={"projectsDetails__li "+cls}>
            <div className="cover">
                <div className='projectDetails_lft'>
                    <p className="details__name">{projectName.name}</p>
                    <p className="details__role color_themed">{role.title}</p>
                    {role.subtitle && <p className="details__subrole color_themed">{role.subtitle}</p>}
                    <p className="details__desc">{desc}</p>
                    {subpageURL && <NavLink to={subpageURL} exact className="details__btn btn">Find Out More</NavLink>}
                    {!subpageURL && <a href={links.website} target="_blank"  rel="noopener noreferrer" className="details__btn btn">Website</a>}


                </div>
                <div className='projectDetails_rgt'>
                    { imgs.logo && <div className="details__logo "><img src={require('./../../../media/logos/'+imgs.logo)} alt={`${projectName.name} logo`}/></div>}
                    <div className="details__links">
                        {links && links.facebook && <a href={links.facebook} target="_blank"  rel="noopener noreferrer"> <img src={facebook} alt="facebook logo"/></a>}
                        {links && links.twitter && <a href={links.twitter}  target="_blank"  rel="noopener noreferrer"> <img src={twitter} alt="twitter logo"/></a>}
                        {links && links.instagram && <a href={links.instagram}  target="_blank"  rel="noopener noreferrer"><img src={instagram} alt="instagram logo"/></a>}
                    </div>
                </div>

            </div>
        </li>
    )
}
function showHomeHiddenEl(e){
    e.target.remove();
    document.querySelector('.Home__hidden').style.display = 'block';
    window.scrollBy(0,document.documentElement.clientHeight-200);

}
