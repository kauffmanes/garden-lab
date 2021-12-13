import type { MetaFunction } from 'remix';

export let meta: MetaFunction = () => {
    return {
        title: 'Dashboard'
    }
};

export default function Dashboard() {
    return (
        <div>
            <p>Future home of the dashboard</p>
        </div>
    );
}