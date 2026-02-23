import React, { useState, useEffect } from 'react';
import API from '../services/api';
import TaskCard from '../components/TaskCard';
import { Plus } from 'lucide-react';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchTasks = async () => {
        try {
            const { data } = await API.get('/tasks');
            setTasks(data);
        } catch (err) {
            console.error('Failed to fetch tasks', err);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleAddTask = async (e) => {
        e.preventDefault();
        if (!title) return;
        setLoading(true);
        try {
            const { data } = await API.post('/tasks', { title, description });
            setTasks([...tasks, data]);
            setTitle('');
            setDescription('');
        } catch (err) {
            alert('Failed to add task');
        } finally {
            setLoading(false);
        }
    };

    const handleToggleTask = async (id, isCompleted) => {
        try {
            await API.put(`/tasks/${id}`, { isCompleted });
            setTasks(tasks.map(t => t._id === id ? { ...t, isCompleted } : t));
        } catch (err) {
            alert('Failed to update task');
        }
    };

    const handleDeleteTask = async (id) => {
        if (!window.confirm('Are you sure?')) return;
        try {
            await API.delete(`/tasks/${id}`);
            setTasks(tasks.filter(t => t._id !== id));
        } catch (err) {
            alert('Failed to delete task');
        }
    };

    return (
        <div className="dashboard-container">
            <div className="glass-card" style={{ maxWidth: 'none', marginBottom: '2rem', padding: '1.5rem' }}>
                <h2 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Add New Task</h2>
                <form onSubmit={handleAddTask} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '1rem', alignItems: 'end' }}>
                    <div className="input-group" style={{ marginBottom: 0 }}>
                        <label>Title</label>
                        <input type="text" placeholder="Task title..." value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="input-group" style={{ marginBottom: 0 }}>
                        <label>Description (Optional)</label>
                        <input type="text" placeholder="Details..." value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginTop: 0, width: 'auto', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }} disabled={loading}>
                        <Plus size={20} /> {loading ? 'Adding...' : 'Add Task'}
                    </button>
                </form>
            </div>

            <div className="tasks-list">
                <h2 style={{ marginBottom: '1rem' }}>Your Tasks ({tasks.length})</h2>
                {tasks.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#9ca3af', padding: '2rem' }}>No tasks found. Add one above! 🚀</p>
                ) : (
                    tasks.map(task => (
                        <TaskCard
                            key={task._id}
                            task={task}
                            onToggle={handleToggleTask}
                            onDelete={handleDeleteTask}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;
