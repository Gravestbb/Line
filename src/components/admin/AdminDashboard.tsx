import { Users, UserPlus, TrendingUp, AlertCircle, Calendar, Send } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">ダッシュボード</h2>
        <p className="text-gray-600">会員管理システムの全体状況を確認できます</p>
      </div>

      {/* KPI カード */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-blue-100 rounded-lg p-3">
              <Users className="size-6 text-blue-600" />
            </div>
            <Badge className="bg-blue-600">+12</Badge>
          </div>
          <p className="text-gray-600 mb-1">LINE友だち数</p>
          <p className="text-gray-900 text-3xl">1,248</p>
          <p className="text-gray-500 text-sm mt-2">会員: 645 / 非会員: 603</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-green-100 rounded-lg p-3">
              <UserPlus className="size-6 text-green-600" />
            </div>
            <Badge className="bg-green-600">今月</Badge>
          </div>
          <p className="text-gray-600 mb-1">新規入会者</p>
          <p className="text-gray-900 text-3xl">23</p>
          <p className="text-gray-500 text-sm mt-2">前月比: +8名</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-purple-100 rounded-lg p-3">
              <Calendar className="size-6 text-purple-600" />
            </div>
            <Badge className="bg-purple-600">今月</Badge>
          </div>
          <p className="text-gray-600 mb-1">イベント実施数</p>
          <p className="text-gray-900 text-3xl">8</p>
          <p className="text-gray-500 text-sm mt-2">総参加者: 324名</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-amber-100 rounded-lg p-3">
              <AlertCircle className="size-6 text-amber-600" />
            </div>
            <Badge className="bg-amber-600">要対応</Badge>
          </div>
          <p className="text-gray-600 mb-1">更新対象者</p>
          <p className="text-gray-900 text-3xl">48</p>
          <p className="text-gray-500 text-sm mt-2">完了: 35 / 未完了: 13</p>
        </Card>
      </div>

      {/* 月間利用状況 */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="size-5 text-blue-600" />
          <h3 className="text-gray-900">月間利用状況</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">LINEミニアプリ利用者</span>
              <span className="text-blue-600">428名 (66%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '66%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">イベント申込率</span>
              <span className="text-green-600">82%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '82%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">配信開封率</span>
              <span className="text-purple-600">58%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '58%' }}></div>
            </div>
          </div>
        </div>
      </Card>

      {/* 要フォロー会員 */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="size-5 text-amber-600" />
          <h3 className="text-gray-900">要フォロー会員</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div>
              <p className="text-gray-900">更新期限まで1ヶ月以内</p>
              <p className="text-gray-600 text-sm">単位未達成の会員</p>
            </div>
            <div className="text-right">
              <p className="text-amber-600 text-2xl">13名</p>
              <button className="text-amber-700 text-sm underline mt-1">一覧を見る</button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div>
              <p className="text-gray-900">90日以上ログインなし</p>
              <p className="text-gray-600 text-sm">アクティブ化が必要</p>
            </div>
            <div className="text-right">
              <p className="text-blue-600 text-2xl">27名</p>
              <button className="text-blue-700 text-sm underline mt-1">一覧を見る</button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div>
              <p className="text-gray-900">イベント未参加（6ヶ月）</p>
              <p className="text-gray-600 text-sm">イベント案内が必要</p>
            </div>
            <div className="text-right">
              <p className="text-purple-600 text-2xl">42名</p>
              <button className="text-purple-700 text-sm underline mt-1">一覧を見る</button>
            </div>
          </div>
        </div>
      </Card>

      {/* 直近の配信実績 */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Send className="size-5 text-green-600" />
          <h3 className="text-gray-900">直近の配信実績</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-gray-700">配信日時</th>
                <th className="text-left py-3 px-4 text-gray-700">件名</th>
                <th className="text-left py-3 px-4 text-gray-700">配信数</th>
                <th className="text-left py-3 px-4 text-gray-700">開封率</th>
                <th className="text-left py-3 px-4 text-gray-700">クリック率</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-900">2025/11/18 10:00</td>
                <td className="py-3 px-4 text-gray-900">【重要】資格更新のお知らせ</td>
                <td className="py-3 px-4 text-gray-900">645</td>
                <td className="py-3 px-4 text-green-600">68%</td>
                <td className="py-3 px-4 text-blue-600">42%</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-900">2025/11/15 14:00</td>
                <td className="py-3 px-4 text-gray-900">12月イベント案内</td>
                <td className="py-3 px-4 text-gray-900">1,248</td>
                <td className="py-3 px-4 text-green-600">58%</td>
                <td className="py-3 px-4 text-blue-600">35%</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-900">2025/11/11 10:00</td>
                <td className="py-3 px-4 text-gray-900">会員向け週次ニュース</td>
                <td className="py-3 px-4 text-gray-900">645</td>
                <td className="py-3 px-4 text-green-600">52%</td>
                <td className="py-3 px-4 text-blue-600">28%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
