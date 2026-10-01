// Control place to wire up every Sequelize association.
// Import all database models

// ---------------------------- User domain ------------------------------------
import { User } from './user.js';
import { Role } from './userRole.js';
import { UserStatus } from './userStatus.js';
import { Phone } from './phone.js';

// ---------------------------- Room domain ------------------------------------
import { Room } from './room.js';
import { RoomStatus } from './roomStatus.js';
import { RoomType } from './roomType.js';

// -------------------------- Booking domain -----------------------------------
import { Booking } from './booking.js';
import { BookingStatus } from './bookingStatus.js';
import { BookingStatusHistory } from './bookingStatusHistory.js';

// -------------------------- Payment domain -----------------------------------
import { Payment } from './payment.js';
import { PaymentMethod } from './paymentMethod.js';
import { PaymentStatus } from './paymentStatus.js';

// ----------------------- Conversation domain ---------------------------------
import { Conversation } from './conversation.js ';
import { ConversationStatus } from './conversationStatus.js';
import { Message } from './message.js';

// Function to manage all models associations
export function setAssociations() {

  // --------------------- User domain associations ----------------------------

  // A role can have many users
  Role.hasMany(User, {
    foreignKey: 'role',
    sourceKey: 'id',
    as: 'users',
  });

  // A user belongs to one role
  User.belongsTo(Role, {
    foreignKey: 'role',
    targetKey: 'id',
    as: 'roleData',
  });

  // A status can have many users
  UserStatus.hasMany(User, {
    foreignKey: 'status',
    sourceKey: 'id',
    as: 'users',
  });

  // A user belongs to one status
  User.belongsTo(UserStatus, {
    foreignKey: 'status',
    targetKey: 'id',
    as: 'statusData',
  });

  // A user can have many phones
  User.hasMany(Phone, {
    foreignKey: 'user',
    sourceKey: 'id',
    as: 'phones',
  });

  // A phone belongs to one user
  Phone.belongsTo(User, {
    foreignKey: 'user',
    targetKey: 'id',
    as: 'userData',
  });

  // --------------------- Room domain associations ----------------------------

  // A room type can have many rooms
  RoomType.hasMany(Room, {
    foreignKey: 'type',
    sourceKey: 'id',
    as: 'rooms',
  });

  // A room belongs to one room type
  Room.belongsTo(RoomType, {
    foreignKey: 'type',
    targetKey: 'id',
    as: 'typeData',
  });

  // A room status can have many rooms
  RoomStatus.hasMany(Room, {
    foreignKey: 'status',
    sourceKey: 'id',
    as: 'rooms',
  });

  // A room belongs to one room status
  Room.belongsTo(RoomStatus, {
    foreignKey: 'status',
    targetKey: 'id',
    as: 'statusData',
  });
}