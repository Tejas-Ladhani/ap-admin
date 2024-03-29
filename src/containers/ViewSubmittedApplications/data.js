export const customTableData = [
    {
        key: '1',
        applicationid:'APP-MSCMSC831',
        name: 'Tejas Ladhani',
        branch: 'IT',
        institute: 'CSPIT',
        email: '19it059@charusat.edu.in',
        address: 'New York No. 1 Lake Park',
        marks: 'Not Submitted',
    },
    {
        key: '2',
        applicationid:'APP-MSCMSC831',
        name: 'Shrey Makwana',
        branch: 'IT',
        institute: 'CSPIT',
        email: '19it059@charusat.edu.in',
        address: 'London No. 1 Lake Park',
        marks: '87',
    },
    {
        key: '3',
        applicationid:'APP-MSCMSC831',
        name: 'Radhika Tiwari',
        branch: 'IT',
        institute: 'CSPIT',
        email: '19it068@charusat.edu.in',
        address: 'London No. 1 Lake Park',
        marks: '91',
    },
    {
        key: '4',
        applicationid:'APP-MSCMSC831',
        name: 'Rekha Popat',
        branch: 'IT',
        institute: 'CSPIT',
        email: '19it095@charusat.edu.in',
        address: 'London No. 1 Lake Park',
        marks:'81'
    },
    {
        key: '5',
        applicationid:'APP-MSCMSC831',
        name: 'Ravi Karia',
        branch: 'IT',
        institute: 'CSPIT',
        email: '19it0120@charusat.edu.in',
        address: 'London No. 1 Lake Park',
        marks:'71'
    },
    {
        key: '6',
        applicationid:'APP-MSCMSC831',
        name: 'Megha Man',
        branch: 'ME',
        institute: 'CSPIT',
        email: '19it077@charusat.edu.in',
        address: 'Sidney No. 1 Lake Park',
        marks:'82'
    },
    {
        key: '7',
        applicationid:'APP-MSCMSC831',
        name: 'Rohan Bangoriya',
        branch: 'ME',
        institute: 'CSPIT',
        email: '19it041@charusat.edu.in',
        address: 'Sidney No. 1 Lake Park',
        marks:'68'
    },
    {
        key: '8',
        applicationid:'APP-MSCMSC831',
        name: 'Sameer Wangdu',
        branch: 'ME',
        institute: 'CSPIT',
        email: '19it024@charusat.edu.in',
        address: 'Sidney No. 1 Lake Park',
        marks:'82'
    },
    {
        key: '9',
        applicationid:'APP-MSCMSC831',
        name: 'Omshree Okhani',
        branch: 'ME',
        institute: 'CSPIT',
        email: '19it086@charusat.edu.in',
        address: 'Sidney No. 1 Lake Park',
        marks:'Not Submitted'
    },
    {
        key: '10',
        applicationid:'APP-MSCMSC831',
        name: 'shreyansh Bhagat',
        branch: 'ME',
        institute: 'CSPIT',
        email: '19it092@charusat.edu.in',
        address: 'Sidney No. 1 Lake Park',
        marks:'88'
    },
    {
        key: '11',
        applicationid:'APP-MSCMSC831',
        name: 'Ranchit Sharma',
        branch: 'ME',
        institute: 'CSPIT',
        email: '19it051@charusat.edu.in',
        address: 'London No. 2 Lake Park',
        marks:'90'
    },
];


export const customTableColumnsData = [
    {
        title: 'Application ID',
        dataIndex: 'applicationid',
        key: 'applicationid',
        responsive: ['md'],
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        responsive: ['md']
    },
    {
        title: 'Branch',
        dataIndex: 'branch',
        key: 'branch',
        responsive: ['md'],
    },
    {
        title: 'Institute',
        dataIndex: 'institute',
        key: 'institute',
        responsive: ['md'],
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        responsive: ['md'],
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Marks',
        dataIndex: 'marks',
        key: 'marks',
        responsive: ['md'],
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend']
    }

]
// export const customTableColumns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//         // width: '30%',
//         ...getColumnSearchProps('name'),
//         responsive: ['md'],
//     },
//     {
//         title: 'Branch',
//         dataIndex: 'branch',
//         key: 'branch',
//         // width: '20%',
//         responsive: ['md'],
//         ...getColumnSearchProps('branch'),
//     },
//     {
//         title: 'Institute',
//         dataIndex: 'institute',
//         key: 'institute',
//         responsive: ['md'],
//         // width: '20%',
//         ...getColumnSearchProps('institute'),
//     },
//     {
//         title: 'Fees Paid',
//         dataIndex: 'email',
//         key: 'email',
//         responsive: ['md'],
//         ...getColumnSearchProps('email'),
//         sorter: (a, b) => a.address.length - b.address.length,
//         sortDirections: ['descend', 'ascend'],
//     },
// ];
