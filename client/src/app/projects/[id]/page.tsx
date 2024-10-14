'use client'

import Board from '@/components/project/BoardView'
import List from '@/components/project/ListView'
import Timeline from '@/components/project/TimelineView'
import Table from '@/components/project/TableView'
import ProjectHeader from '@/components/project/ProjectHeader'
import React, { useState } from 'react'
import ModalNewTask from '@/components/ModalNewTask'

type Props = {
  params: { id: string }
}

const Project = ({ params }: Props) => {

  const { id } = params;

  const [activeTab, setActiveTab] = useState('Board');
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);


  return (
    <div>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        id={id}
      />
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "List" && (
        <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Timeline" && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Table" && (
        <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  )
}

export default Project;