import {User} from '@/models'

async function userSeeder(session) {
    const email = 'admin@opennezt.vn'
    const password = 'OpenNezt@123.edu.vn'
    let superAdmin = await User.findOne({email})
    if (!superAdmin) {
        superAdmin = new User({name: 'Super Admin', email, password})
        await superAdmin.save({session})
    }
}

export default userSeeder
