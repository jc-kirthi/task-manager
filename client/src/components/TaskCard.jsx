import React from 'react';
import { Trash2, CheckCircle, Circle } from 'lucide-react';

const TaskCard = ({ task, onToggle, onDelete }) => {
    return (
        <div className="task-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button
                    onClick={() => onToggle(task._id, !task.isCompleted)}
                    style={{ border: 'none', background: 'none', cursor: 'pointer', color: task.isCompleted ? '#10b981' : '#9ca3af' }}
                >
                    {task.isCompleted ? <CheckCircle size={24} /> : <Circle size={24} />}
                </button>
                <div>
                    <h3 style={{ textDecoration: task.isCompleted ? 'line-through' : 'none', color: task.isCompleted ? '#9ca3af' : 'inherit', fontSize: '1.1rem' }}>
                        {task.title}
                    </h3>
                    {task.description && <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{task.description}</p>}
                </div>
            </div>
            <button
                onClick={() => onDelete(task._id)}
                style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#ef4444' }}
            >
                <Trash2 size={20} />
            </button>
        </div>
    );
};

export default TaskCard;
